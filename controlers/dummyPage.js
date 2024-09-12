const express = require("express");

exports.dummyPage = (req, res) => {
    res.send("<h1>This is a dummy page</h1>");
}