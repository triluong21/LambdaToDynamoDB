// Load credentials
import { rejects } from "assert";
import AWS = require("aws-sdk");
import { resolve } from "dns";

export const createDynamoDb = () => {
// Load credentials and set region from JSON file
  const ddb = new AWS.DynamoDB({ region: "us-east-2" });

  const tableParams = {
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    TableName: "ActionTable",
    StreamSpecification: {
      StreamEnabled: false,
    },
  };
  ddb.createTable(tableParams).promise()
    .then((dynamoData: any) => {
      const parsedDynamoData = JSON.stringify(dynamoData);
      console.log("Table is created: " + parsedDynamoData);
      return parsedDynamoData;
    })
    .catch((dynamoErr: any) => {
      const parseddynamoErr = JSON.stringify(dynamoErr);
      console.log("Erred on creating table. Error message: " + dynamoErr);
      return dynamoErr;
    });
};
