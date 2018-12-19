import React from "react";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import "react-widgets/dist/css/react-widgets.css";
import { SubmissionError } from "redux-form";
import { connect } from "react-redux";
import { sendForm } from "../actions";
// Form controller
moment.locale("pl");
momentLocalizer();

//validations
const required = value => (value ? undefined : "Required");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

// Render function DTPicker
const renderDateTimePicker = ({
  input: { onChange, value },
  placeholder,
  meta: { touched, error, visited }
}) => {
  const className = `field ${error && touched ? "error" : ""}`;
  return (
    <div className={className}>
      <DateTimePicker
        autoOk={true}
        onChange={onChange}
        format="DD/MMM/YYYY"
        time={false}
        value={value ? new Date(value) : null}
        placeholder={placeholder}
      />
      {(touched || visited) &&
        (error && <div className="ui pointing red basic label">{error}</div>)}
    </div>
  );
};

// Render for other input fields (name, surname, e-mail)
const renderField = ({ input, meta: { touched, error }, placeholder }) => {
  const className = `field ${error && touched ? "error" : ""}`;
  return (
    <div className={className}>
      <div>
        <input {...input} placeholder={placeholder} />
        {touched &&
          (error && <div className="ui pointing red basic label">{error}</div>)}
      </div>
    </div>
  );
};
//Main class with render-submit functions
class ParticipantForm extends React.Component {
  onSubmit = formValues => {
    const error = "Error saving form! Try again.";

    if (
      !formValues.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      throw new SubmissionError({ _error: error });
    } else if (!formValues.name) {
      throw new SubmissionError({ _error: error });
    } else if (!formValues.surname) {
      throw new SubmissionError({ _error: error });
    } else if (!formValues.datePicker) {
      throw new SubmissionError({ _error: error });
    } else {
      this.props.sendForm(formValues);
    }
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          id="name"
          name="name"
          component={renderField}
          placeholder="Name"
          validate={required}
        />
        <Field
          id="surname"
          name="surname"
          component={renderField}
          placeholder="Surname"
          validate={required}
        />
        <Field
          id="email"
          name="email"
          component={renderField}
          placeholder="E-mail"
          validate={[email, required]}
        />
        <Field
          id="datePicker"
          name="datePicker"
          component={renderDateTimePicker}
          showTime={false}
          placeholder="Date of holiday"
          validate={required}
        />
        <button id="submit" className="ui teal button">Submit</button>
        {this.props.error && <strong>{this.props.error}</strong>}
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: "ParticipantForm"
})(ParticipantForm);

export default connect(
  null,
  { sendForm }
)(formWrapped);
