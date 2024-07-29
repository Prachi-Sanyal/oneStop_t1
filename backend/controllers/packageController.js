const Package = require('../models/Package');

exports.createPackage = async (req, res) => {
  const { name, description, price, services } = req.body;

  try {
    const package = new Package({
      name,
      description,
      price,
      services,
    });

    await package.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find({});
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
