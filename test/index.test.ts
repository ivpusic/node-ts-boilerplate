import * as supertest from 'supertest';
import { assert } from 'chai';

import app from '../src/app';

describe('ping', () => {
  const req = supertest(app.listen());

  it('returns pong', async () => {
    const result = await req.get('/ping')
      .expect(200);

    assert.equal(result.text, 'pong');
  });
});
