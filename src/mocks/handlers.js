import { rest } from "msw";

const baseURL = "https://cookbook-project-5.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 2,
        "username": "admin_no_1",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 2,
        "profile_image": "https://res.cloudinary.com/dayy03gfs/image/upload/v1/media/images/008c1fd5-1bac-4851-a7eb-0e0529679d0c_njpwiv"    
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];