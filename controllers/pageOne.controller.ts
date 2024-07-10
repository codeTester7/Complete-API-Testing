import * as supertest from 'supertest';
import config from '../config/envOne.config';
const request = supertest(config.baseURL);

class RequestReponse{
    getReq() {
        return request
        .get('/posts');
    }

    getReqById(id) {
        return request
        .get(`/posts/${id}`)
    }

    postReq(postData) {
        return request
        .post('/posts')
        .send(postData)
    }

    putReq(putData, id) {
        return request
        .put(`/posts/${id}`)
        .send(putData)
    }

    patchReq(patchData, id) {
        return request
        .patch(`/posts/${id}`)
        .send(patchData)
    }

    deleteReq(id) {
        return request
        .delete(`/posts/${id}`)
    }
}

export default new RequestReponse();