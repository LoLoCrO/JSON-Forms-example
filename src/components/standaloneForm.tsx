import React from 'react';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import {
  JsonFormsRendererRegistryEntry,
  JsonSchema7,
  UISchemaElement,
} from '@jsonforms/core';
import ratingControlTester from '../tests/ratingControlTester';
import RatingControl from './RatingControl';

interface IStandaloneForm {
  schema: JsonSchema7;
  uischema: UISchemaElement;
  jsonformsInputData: any;
  setJsonformsOutputData: React.Dispatch<any>;
}

const renderers: JsonFormsRendererRegistryEntry[] = [
  ...materialRenderers,
  //register custom renderers (can be ant design)
  { tester: ratingControlTester, renderer: RatingControl },
];

const StandaloneForm = ({
  schema,
  uischema,
  jsonformsInputData,
  setJsonformsOutputData,
}: IStandaloneForm) => (
  <JsonForms
    schema={schema}
    uischema={uischema}
    data={jsonformsInputData}
    renderers={renderers}
    cells={materialCells}
    onChange={({ errors, data }) => setJsonformsOutputData(data)}
  />
);

export default StandaloneForm;
