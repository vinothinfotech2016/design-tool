import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Form from "@rjsf/core";
import { widgets } from "../../widgets/widgets";
import { parameterSchema, parameterUiSchema } from "../schema/Parameters";
import { customErrorMsg } from "../../template/customErrorMsg";
import { CustomFieldTemplate } from "../../template/fieldTemplate";
import { objectFieldTemplate } from "../../template/objectTemplate";

// import { Routes, Route } from "react-router-dom";

export const Parameters = (props) => {
  const [parameter, setParameter] = useState({});
  const [liveValidator, setLiveValidator] = React.useState(false);

  return (
    <>
      <Box>
        <h3 style={{ paddingLeft: "50px" }}>PARAMETERS</h3>
        <Box className="container">
          <Form
            schema={parameterSchema}
            uiSchema={parameterUiSchema()}
            widgets={widgets}
            formData={parameter}
            showErrorList={false}
            liveValidate={liveValidator}
            noHtml5Validate
            ObjectFieldTemplate={objectFieldTemplate}
            FieldTemplate={CustomFieldTemplate}
            transformErrors={(errors) =>
              customErrorMsg(errors, parameterSchema)
            }
            onChange={(e) => {
              console.log(e.formData);
              setParameter({
                ...e.formData,
              });
            }}
            onSubmit={(props) => {
              console.log(props.formData);
              console.log(customErrorMsg);
            }}
          >
            <div className="btnContainer">
              <Button variant="outlined" className="btn">
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="btn"
                onClick={() => setLiveValidator(true)}
              >
                SUBMIT
              </Button>
            </div>
          </Form>
        </Box>
      </Box>
    </>
  );
};
