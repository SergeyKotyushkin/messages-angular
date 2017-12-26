import { UserModel } from '../models/user'

let mockUsers = [
    new UserModel("id1", "user1", "pass1"),
    new UserModel("id2", "user2", "pass2"),
    new UserModel("id3", "user3", "pass3")
];

export { mockUsers as MockUsers }
