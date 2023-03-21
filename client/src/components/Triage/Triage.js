import * as S from "./Triage.styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getAge } from "../../utils/utils";
import { Dna } from "react-loader-spinner";

const Triage = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [prescriptions, setPrescriptions] = useState("");
  const [age, setAge] = useState("");
  const [insurance, setInsurance] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [medicalNote, setMedicalNote] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    if (
      name !== "" ||
      weight !== "" ||
      prescriptions !== "" ||
      age !== "" ||
      insurance !== "" ||
      symptoms !== ""
    ) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_SERVER_URL}/triage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          weight,
          prescriptions,
          age: getAge(age),
          insurance,
          symptoms,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setMedicalNote(data.text);
        });
    } else {
      alert("no insurance? no service fuck face");
    }
  };

  return (
    <S.TriageWrapper response={medicalNote !== ""}>
      <S.PurpleBackground>
        <S.FormWrapper>
          <S.QuestionWrapper>
            <S.Question>What is your name?</S.Question>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              label="Outlined"
              variant="outlined"
            />
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.Question>What is your weight in lbs?</S.Question>
            <TextField
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              value={weight}
              label="Outlined"
              variant="outlined"
            />
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.Question>Are you on any prescriptions?</S.Question>
            <TextField
              onChange={(e) => {
                setPrescriptions(e.target.value);
              }}
              value={prescriptions}
              label="Outlined"
              variant="outlined"
            />
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.Question>What is your age?</S.Question>
            <DatePicker
              value={age}
              onChange={(e) => {
                setAge(e);
              }}
            />
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.Question>What insurance do you have?</S.Question>
            <TextField
              onChange={(e) => {
                setInsurance(e.target.value);
              }}
              value={insurance}
              label="Outlined"
              variant="outlined"
            />
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.Question>What are your symptoms?</S.Question>
            <TextField
              onChange={(e) => {
                setSymptoms(e.target.value);
              }}
              value={symptoms}
              label="Multiline"
              multiline
              rows={4}
            />
          </S.QuestionWrapper>
          {loading ? (
            <S.LoadingWrapper>
              <Dna
                visible={loading}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperClass="dna-wrapper"
              />
            </S.LoadingWrapper>
          ) : (
            <Button variant="contained" onClick={submitHandler}>
              Submit
            </Button>
          )}
        </S.FormWrapper>
      </S.PurpleBackground>
      {medicalNote !== "" ? (
        <S.Response>
          <S.Pre>{medicalNote}</S.Pre>
        </S.Response>
      ) : null}
    </S.TriageWrapper>
  );
};

export default Triage;
