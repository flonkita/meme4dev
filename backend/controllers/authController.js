exports.authenticate = (req, res) => {
  const { password } = req.body;
  if (password === process.env.PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};
