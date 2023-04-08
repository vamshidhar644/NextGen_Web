import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import '../AdminStyles/EditBanner.css';

import { useBannerContext } from '../hooks/useBannerContext';
import { useAuthContext } from '../hooks/useAuthContext';

const EditBanner = () => {
  const { bannerdispatch } = useBannerContext();
  const { user } = useAuthContext();

  const [_id, setBannerid] = useState('');
  const [name, setName] = useState('');
  const [imgpath, setimgpath] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 240,
    };
    try {
      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.onload = () => {
        const binaryData = reader.result;
        console.log(binaryData);
        setimgpath(binaryData);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const bannerDetais = {
      name,
      imgpath,
    };

    const response = await fetch('/api/banner', {
      method: 'POST',
      body: JSON.stringify(bannerDetais),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      setIsLoading(false);
    }
    if (response.ok) {
      setName('');
      setError(null); 
      setEmptyFields([]);
      // console.log('new Banner added', json);
      bannerdispatch({ type: 'CREATE_BANNER', payload: json });
      setIsLoading(false);
    }
  };

  return (
    <div className="form-parent">
      <form className="create">
        <h3>
          Banner images : <span>{_id}</span>
        </h3>
        {error && <div className="error">{error}</div>}

        <div className="FormBoxes">
          <div className="Item-form-Row">
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="Input-Box"
            />
          </div>
          <div className="actions">
            <label
              htmlFor="file"
              className={
                imgpath ? 'button upload-btn imageExist' : 'button upload-btn'
              }
            >
              Choose file
              {/* {!imgpath && <p>Choose File</p>}
                {imgpath && <p>{testImage}</p>} */}
              <input
                className="file"
                hidden=""
                type="file"
                id="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleFileChange}
                name="photo"
              />
            </label>
          </div>
          <div className="Item-form-Row add-btn-container">
            <label>
              <button onClick={handleSubmit}>upload</button>
            </label>
            {/* {isLoading ? (
              <AddItemLoader />
            ) : (
              <div className="Returned-btn" onClick={handleSubmit}>
                Save
              </div>
            )} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBanner;
