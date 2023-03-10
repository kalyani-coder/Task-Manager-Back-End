const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Task Manager API",
    description: "Task Manager API Documentation(autogenerated)",
  },
  host: ["164.92.83.169"],
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json", "multipart/form-data"],
  produces: ["application/json"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routers/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
