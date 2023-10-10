const router = require('express').Router();
const {getProducts, getCategoryProducts, addProducts, getCategories, addCategories} = require('../db_tools/product_db');


/**
 * Endpoint for getting all the products
 */
router.get('/products', async (req, res) => {
    try {
       res.status(200).json(await getProducts());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



/**
 * Endpoint for getting all the products in a spesific category
 */
router.get('/categoryproducts', async (req, res) => {
    try {
        const category = req.query.category;
        res.status(200).json(await getCategoryProducts(category));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * Endpoint for adding new products 
 */
router.post('/addproducts', async (req, res) => {
    try {
        const products = req.body;
        await addProducts(products);
        res.status(200).send("Products added!");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * Endpoint for getting all the categories
 */
router.get('/categories', async (req, res) => {
    try {
        res.json(await getCategories());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * Endpoint for adding new product categories
 */
router.post('/addcategories', async (req, res) => {
    try {
        const categories = req.body;
        await addCategories(categories);
        res.status(200).send("Categories added!");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;