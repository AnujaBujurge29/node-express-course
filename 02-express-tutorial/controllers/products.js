const { products } = require('../data');

const getProducts = (req, res) => {
    // res.json(products);
    res.status(200).json({ sucess: true, data: products })
}

const addProduct = (req, res) => {
    if (!req.body.name) {
        return res.status(400)
            .json({ sucess: false, message: "Please provide the name" })
    }
    products.push({ id: products.length + 1, name: req.body.name });
    res.status(201)
        .json({ success: true, name: req.body.name })
}

const updateProduct = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const product = products.find((product) => product.id === Number(id))
    if (!product) {
        return res
            .status(400)
            .json({ sucess: false, message: `No product found with ID: ${id}` })
    }
    const newProduct = products.map((product) => {
        if (product.id === Number(id)) {
            product.name = name
        }
        return product
    })
    res
        .status(200)
        .json({ success: true, name: newProduct });
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    const product = products.find((product) => product.id === Number(id))
    if (!product) {
        return res
            .status(400)
            .json({ sucess: false, message: `No product found with ID: ${id}` })
    }
    const newProduct = products.filter((product) => product.id !== Number(id))
    return res.status(200).json({ success: true, data: newProduct })
}
module.exports = {
    getProducts, addProduct, updateProduct, deleteProduct
}