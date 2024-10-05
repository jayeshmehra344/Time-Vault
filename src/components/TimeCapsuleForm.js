import React, { useState } from 'react';

const TimeCapsuleForm = ({ onCreateCapsule }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const capsule = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      unlockDate: new Date(unlockDate),
      file,
    };

    onCreateCapsule(capsule);
    setTitle('');
    setContent('');
    setUnlockDate('');
    setFile(null);
  };

  return (
    <form className="time-capsule-form" onSubmit={handleSubmit}>
      <label>Capsule Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter title"
      />
      <label>Memories</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        placeholder="Describe your memories..."
      />
      <label>Unlock Date</label>
      <input
        type="datetime-local"
        value={unlockDate}
        onChange={(e) => setUnlockDate(e.target.value)}
        required
      />
      <label>Attach a File</label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button type="submit">Lock Time Capsule</button>
    </form>
  );
};

export default TimeCapsuleForm;
