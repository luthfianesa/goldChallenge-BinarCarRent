import "../components/filter.css";

const Filter = (props) => {
  return (
    <div className="filter-container">
      <div className="filter-content input">
        <label>Nama Mobil</label>
        <input onChange={props.fName} placeholder="Ketik Nama / Tipe mobil"></input>
      </div>
      <div className="filter-content input ">
        <label>Kategori</label>
        <select onClick={props.fCategory} name="category" id="category" className="dropdown">
          <option value="" disabled selected hidden>
            <span className="dropdown-placeholder">Masukan Kapasitas Mobil</span>
          </option>
          <option value="small">2 - 4 Orang</option>
          <option value="Medium">4 - 6 Orang</option>
          <option value="large">6 - 8 Orang</option>
        </select>
      </div>
      {/* Input Harga */}
      <div className="filter-content input">
        <label>Harga Sewa</label>
        <select onClick={props.fMinPrice} name="price" id="price" className="dropdown">
          <option value="" disabled selected hidden>
            Masukan Harga Sewa Per Hari
          </option>
          <option value="300k">Mulai dari Harga Terendah</option>
          <option value="400k">Mulai dari Harga Tertinggi</option>
        </select>
      </div>

      <div className="filter-content input availability">
        <label>Status</label>
        <select onClick={props.fStatus} name="status" id="status" className="dropdown">
          <option value="" disabled selected hidden>
            Cek Ketersedian
          </option>
          <option value="true">Tersedia</option>
          <option value="false">Disewa</option>
        </select>
      </div>
      <div className="button-cariMobil">
        <button onClick={props.handleFilter}>Cari Mobil</button>
      </div>
    </div>
  );
};

export default Filter;

// Harga Sewa Per Hari
{/* <div className="filter-content input">
  <label>Harga Sewa Per Hari</label>
  <input onChange={props.fMinPrice} placeholder="Masukan Harga Sewa Per Hari" type="number"></input>
</div>; */}

//   <div className="input-harga-container">
//   <div className="filter-content input">
//     <label>Harga Sewa Per Hari</label>
//     <input
//     onChange={props.fMinPrice}
//     placeholder={props.isInputDisable ? null : 'Minimal Harga'}
//     className={props.isInputDisable ? 'filter-cars-input-name-disable' : 'filtercars-input-name'}
//     type='number'
//     ></input>
//     <input
//     onChange={props.fMaxPrice}
//     placeholder={props.isInputDisable ? null : 'Maksimal Harga'}
//     className={props.isInputDisable ? 'filtercars-input-name-disable' : 'filtercars-input-name'}
//     type='number'
//     ></input>
//   </div>
// </div>
