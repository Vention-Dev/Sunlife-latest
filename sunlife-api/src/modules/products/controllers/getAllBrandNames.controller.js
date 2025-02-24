const getAllBrandNames = require('../services/getAllBrandNames.services')

const getAllBrandNamesControler = async (req, res) => {
    try {
      const brandNames = await getAllBrandNames();
      res.status(200).json(brandNames);
    } catch (error) {
      console.error("Error while getting brand names:", error);
      res.status(500).json({ status: false, code: 500, msg: error.message });
    }
  };
module.exports = getAllBrandNamesControler;
  