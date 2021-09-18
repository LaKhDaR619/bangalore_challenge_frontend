import { Row, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "../../../components/TimePicker";
import { AddTimeLogForm } from "../types";
import { addTimeLog } from "../services";

const AddLog: React.FC = () => {
  const [values, setValues] = useState<AddTimeLogForm>({
    startTime: null,
    endTime: null,
    description: "",
  });

  const [errors, setErrors] = useState({
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleAddTimeLog = async () => {
    const newErrors = { startTime: "", endTime: "", description: "" };

    // validating inputs
    if (!values.startTime) {
      newErrors.startTime = "start time is required";
      setErrors(newErrors);
      return;
    }

    if (!values.endTime) {
      newErrors.endTime = "end time is required";
      setErrors(newErrors);
      return;
    }

    if (values.startTime >= values.endTime) {
      newErrors.endTime = "end time must be greater than start time";
      setErrors(newErrors);
      return;
    }

    if (values.description.length < 1) {
      newErrors.description = "description is required";
      setErrors(newErrors);
      return;
    }

    // clearing errors
    setErrors(newErrors);
    await addTimeLog({
      ...values,
      startTime: values.startTime.toISOString(),
      endTime: values.endTime.toISOString(),
    });
    // clearing values
    setValues({
      startTime: null,
      endTime: null,
      description: "",
    });
  };

  return (
    <>
      <Row justify="center">
        <h1 style={{ marginTop: 16 }}>TimeLogs</h1>
      </Row>
      <div style={{ padding: "0 48px" }}>
        <Form layout="inline">
          <Form.Item
            label="Start Time"
            required
            validateStatus={errors.startTime ? "error" : ""}
            help={errors.startTime}
          >
            <DatePicker
              value={values.startTime}
              onChange={(value) => setValues({ ...values, startTime: value })}
            />
          </Form.Item>
          <Form.Item
            label="End Time"
            required
            validateStatus={errors.endTime ? "error" : ""}
            help={errors.endTime}
          >
            <DatePicker
              value={values.endTime}
              onChange={(value) => setValues({ ...values, endTime: value })}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            required
            validateStatus={errors.description ? "error" : ""}
            help={errors.description}
          >
            <Input
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </Form.Item>
          <Button onClick={() => null} />
          <Form.Item>
            <Button type="primary" onClick={handleAddTimeLog}>
              Add
            </Button>
          </Form.Item>
          <Button onClick={() => null} />
        </Form>
        <Link to="/">All Log</Link>
      </div>
    </>
  );
};

export default AddLog;
