import { expect } from "chai";
import { createDynamoDb } from "../createDynamo";

describe("Create DynamoDB table", () => {
  it("Call createDynamoDb function", async () => {
    const myResult = await createDynamoDb();
    console.log(myResult);
    expect(myResult).to.be.eql(undefined);
  });
});
