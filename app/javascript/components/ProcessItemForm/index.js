import React, { useState } from 'React';
import cs from './styles';

const ProcessItemForm = ({
  initialTitle = '',
  initialDescription = '',
  initialImageUrl = '',
  onProcessImage,
  buttonText,
  loading
}) => {
  const [title, setTitle] = useState(initalTitle);
  const [description, setDescription] = useState(initialDescription);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  return (
    <div className={cs.form}>
      <input
        type='text'
        placeholder='title'
        value={title}
        className={cs.input}
        onChange={e => setTitle(e.currentTarget.value)}
      />
      <input
        type='text'
        placeholder='description'
        value={description}
        className={cs.input}
        onChange={e => setDescription(e.currentTarget.value)}
      />
      <input
        type='text'
        placeholder='url'
        value={imageUrl}
        className={cs.input}
        onChange={e => setImageUrl(e.currentTarget.value)}
      />
      {loading ? (
        '...loading'
      ) : (
        <button onClick={() => onProcessItem({ title, description, imageUrl })} className={cs.button}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProcessItemForm;