import { serverAddress } from "./constants";

export const fetchTasks = async() => {
    const res = await fetch(`${serverAddress}/tasks`);
    const data = await res.json();

    return data;
}

export const fetchTask = async(id) => {
    const res = await fetch(`${serverAddress}/tasks/${id}`);
    const data = await res.json();

    return data;
}

