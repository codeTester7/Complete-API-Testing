import RequestResponse from '../controllers/pageOne.controller'


class repeatReq {
    getBeforeAll(postId) {beforeAll(async () => {
        const response = await RequestResponse.getReqById(postId);
        return response.body;
    });
}
    
    postBeforeAll(postData) { beforeAll(async () => {
        const response = await RequestResponse.postReq(postData);
        return response.body.id;
    });
}
    
    deleteAfterAll(postId) { afterAll(async () => {
        await RequestResponse.deleteReq(postId);
    });
    }
}

export default new repeatReq();