import React from 'react'

const ProductProduct = (props) => {
    const product_detail = {
        kategori: 'Cincin Belah Rotan',
        mutu: '916',
        berat: '3.41 g',
        upah: '80.00',
        harga_barang: "859.00",
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-header">
                    <div>Nama Barang</div>
                    <div className="product-item-code ">Kod Item</div>
                </div>
                <img
                    src="https://www.25karats.com/articles/wp-content/uploads/2015/07/wedding-rings1.jpg"
                    alt=""
                    className="card-img-top"
                />
                <div className="card-body">
                    <table className="table table-sm">
                        <tbody>
                            <tr>
                                <th>Kategori</th>
                                <td className="text-right">{product_detail.kategori}</td>
                            </tr>
                            <tr>
                                <th>Ketulenan</th>
                                <td className="text-right">{product_detail.mutu}</td>
                            </tr>
                            <tr>
                                <th>Berat</th>
                                <td className="text-right">{product_detail.berat}</td>
                            </tr>
                            <tr>
                                <th>Harga Upah</th>
                                <td className="text-right">{product_detail.upah}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colspan="2" className="text-right">
                                    { product_detail.harga_barang}
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="btn-group">
                        <div className="btn btn-outline-primary">Call</div>
                        <div className="btn btn-outline-primary">WA</div>
                    </div>
                </div>
                <div className="col-8">
                <div className="btn btn-block btn-primary">Add To Cart</div></div>
            </div>
            
        </div>
    )
}

export default ProductProduct
