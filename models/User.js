const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nationalcode: {
    type: Number,
    required: true,
  },
  nameOfExam: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
    default: new Date().toISOString().slice(0, 10),
  },
  answerDataScl: {
    type: Array,
    required: true,
  },
  answerDataAMQ: {
    type: Array,
    required: true,
  },
  answerDataBISI: {
    type: Array,
    required: true,
  },
  answerDataCT: {
    type: Array,
    required: true,
  },
  answerDataEQI: {
    type: Array,
    required: true,
  },
  answerDataHolland: {
    type: Array,
    required: true,
  },
  answerDataMBTI: {
    type: Array,
    required: true,
  },
  answerDataNEOFFI: {
    type: Array,
    required: true,
  },
  answerDataNEOPIR: {
    type: Array,
    required: true,
  },
  answerDataPWB: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
