import React from "react";
import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";

// Replace with your own API entrypoint
// For instance if https://example.com/api/books is the path to the collection of book resources,
// then the entrypoint is https://example.com/api
export default () => ( 
  <HydraAdmin entrypoint="http://localhost:8000/api">
  	{/* Ressources visibles sur le back-office */}
  	<ResourceGuesser name="materiels" />
  	<ResourceGuesser name="evenements" />
  	<ResourceGuesser name="actualites" />
  	<ResourceGuesser name="palmares" />
  </HydraAdmin>
);