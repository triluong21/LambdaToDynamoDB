// Load the AWS SDK for Node.js
import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { createDynamoDb } from "./createDynamo";

export const workWithDynamo: Handler = async (event: APIGatewayEvent, context: Context, callback?: Callback) => {
  console.log("Lamba is invoked");
  const myResult = await createDynamoDb();
  console.log("My Result: " + myResult);
};
