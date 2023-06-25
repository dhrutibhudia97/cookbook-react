import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.jpg";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import btnStyles from "../../styles/Button.module.css";
import CreateListItem from "./CreateShoppingList";


function ShoppingListsPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [items, setItems] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [editingItemEntry, setEditingItemEntry] = useState(null);
  const [editingItemTitle, setEditingItemTitle] = useState("");
  const [editingItemAmount, setEditingItemAmount] = useState("");

  const handleEdit = (itemEntry, itemTitle, itemAmount) => {
    setEditingItemEntry(itemEntry);
    setEditingItemTitle(itemTitle);
    setEditingItemAmount(itemAmount);
  };

  const handleCancelEdit = () => {
    setEditingItemEntry(null);
    setEditingItemTitle("");
    setEditingItemAmount("");
  };

  const handleSaveEdit = async (itemEntry) => {
    try {
      await axiosReq.put(`/shoppinglist/${itemEntry}/`, {
        name: editingItemTitle,
        quantity: editingItemAmount,
      });
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === itemEntry) {
            return {
              ...item,
              name: editingItemTitle,
              quantity: editingItemAmount,
            };
          }
          return item;
        })
      );
      setEditingItemEntry(null);
      setEditingItemTitle("");
      setEditingItemAmount("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (itemEntry) => {
    const confirmed = window.confirm("Are you sure you want to delete this from your shopping list?");
    if (confirmed) {
      try {
        await axiosReq.delete(`/shoppinglist/${itemEntry}/`);
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemEntry));
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const fetchShoppingLists = async () => {
      try {
        const { data } = await axiosReq.get(`/shoppinglist/?${filter}&search=${query}`);
        const filteredLists = data.results.filter((item) =>
          item.name.toUpperCase().includes(query.toUpperCase())
        );
        setItems(filteredLists);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchShoppingLists();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>
        <Form
          className="{styles.SearchBar}"
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search for items in your shopping list..."
          />
        </Form>

        <CreateListItem setItems={setItems} />

        {hasLoaded ? (
          <>
            {items.length ? (
              <InfiniteScroll
                dataLength={items.length}
                next={() => fetchMoreData(items, setItems)}
                hasMore={!!items.next}
                loader={<Asset spinner />}
                scrollThreshold="100px"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Items to buy:</th>
                      <th>Quantity:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        {editingItemEntry === item.id ? (
                          <>
                            <td>
                              <Form.Control
                                value={editingItemTitle}
                                onChange={(e) => setEditingItemTitle(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                value={editingItemAmount}
                                onChange={(e) => setEditingItemAmount(e.target.value)}
                              />
                            </td>
                            <td>
                              <button className={`${btnStyles.Button} ${btnStyles.Green}`} onClick={() => handleSaveEdit(item.id)}>
                                Update
                              </button>
                              <button className={`${btnStyles.Button} ${btnStyles.Red}`} onClick={handleCancelEdit}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                              <MoreDropdown
                                handleEdit={() =>
                                  handleEdit(item.id, item.name, item.quantity)
                                }
                                handleDelete={() => handleDelete(item.id)}
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfiniteScroll>
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <p>... Loading Shopping List</p>
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default ShoppingListsPage;