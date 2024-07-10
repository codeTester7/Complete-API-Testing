import RequestResponse from '../controllers/pageOne.controller';
import repeatedReq from '../utils/helper';
const postData = require('../resources/json/postData.json');
const putData = require('../resources/json/putData.json');
const patchData = require('../resources/json/patchData.json');
let postId;

describe.only('Request from environment one', () => {

    // GET REQUEST
    describe('GET REQUEST', () => {
        test('GET /', async () => {
            const response = await RequestResponse.getReq();
            console.log(response.body);
        });
        // Utils -> helper.ts
        postId = repeatedReq.postBeforeAll(postData);

        test('GET BY ID /', async () => {
            const response = await RequestResponse.getReqById(postId);
            console.log(response.body);
        });
    });

    // POST REQUEST
    describe('POST REQUEST', () => {
        test('POST /', async () => {
            const response = await RequestResponse.postReq(postData);
            postId = response.body.id;
            expect(response.body.title).toEqual(postData.title);
            expect(response.statusCode).toBe(201);
        });

        // Utils -> helper.ts
        const response = repeatedReq.getBeforeAll(postId);
        console.log(response);

        // Utils -> helper.ts
        repeatedReq.deleteAfterAll(postId);
    });

    // PUT REQUEST
    describe('PUT REQUEST', () => {
        // Utils -> helper.ts
        postId = repeatedReq.postBeforeAll(postData);


        test('PUT /postId', async () => {
            const response = await RequestResponse.putReq(putData, postId);
            console.log(response.body.title);
        });

        // Utils -> helper.ts
        repeatedReq.deleteAfterAll(postId);
    });

    //PATCH REQUEST
    describe('PATCH REQUEST', () => {
        // Utils -> helper.ts
        postId = repeatedReq.postBeforeAll(postData);

        test('PATCH /postId', async () => {
            const response = await RequestResponse.patchReq(patchData, postId);
            expect(response.body.title).toEqual(patchData.title);
            expect(response.statusCode).toBe(200);
        });

        // Utils -> helper.ts
        repeatedReq.deleteAfterAll(postId);
    });

    // DELETE REQUEST
    describe('DELETE REQUEST', () => {
        // Utils -> helper.ts
        postId = repeatedReq.postBeforeAll(postData);

        test('DELETE /postId', async () => {
            const response = await RequestResponse.deleteReq(postId);
            expect(response.statusCode).toBe(200);
        });
    });
});