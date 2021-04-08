import {
    Get,
    Post
} from "../request-methods";

export const GetRooms = (res, err) =>
    Get("/rooms")
        .then(res)
        .catch(err);

export const GetRoom = (params, res, err) =>
    Get(`/room/${params}`)
        .then(res)
        .catch(err);

export const PostRoom = (params, data, res, err) =>
    Post(`/room/${params}`, data)
        .then(res)
        .catch(err);

export default {
    name: "roomApi",
    GetRooms,
    GetRoom,
    PostRoom
};
