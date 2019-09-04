import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yw9ytjiyX9ohUSv9kl_vQd6A0CaMzZ4QJqEdtCTImNfy1sckbuIBTs_JqD-_2NQ2kHS647KsHBtKZBGYVbn6N1wbY1LdCgeZdBGBwP74yNbf2WHmXgPdAppYfaVtXXYx',
    }
});