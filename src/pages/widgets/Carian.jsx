import React from 'react'

const WidgetCarian = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="hargaDari">Harga Dari</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="hargaKe">Hingga</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="kategori">Kategori</label>
                <select name="kategpri" id="" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className="form-group">
                <label>Mutu</label>
                <select name="mutu" id="" className="form-control">
                    <option value="916">916</option>
                    <option value="999">999</option>
                    <option value="bukanemas">bukan emas</option>
                </select>
            </div>
        </form>
    )
}

export default WidgetCarian
