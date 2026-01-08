import { useState } from "react";
import styled from "styled-components";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    onAddNote({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Add a Note</div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              required
              placeholder=" "
              autoComplete="off"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Title</label>
          </div>

          <div className="input-field">
            <input
              required
              placeholder=" "
              autoComplete="off"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Description</label>
          </div>

          <div className="btn-container">
            <button className="btn" type="submit">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    border: solid 1px #8d8d8d;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
  }

  .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 10px;
    border: solid 1px #1034aa;
    background: linear-gradient(135deg, #0034de, #006eff);
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    width: 100%;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
    border-color: #0034de;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #fff;
    padding: 0 5px;
    color: #0034de;
    font-weight: bold;
  }
    .input-field label {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #8d8d8d;
  pointer-events: none;
  transition: 0.3s ease;
  background: white;
  padding: 0 5px;
}

.input-field input:focus ~ label,
.input-field input:not(:placeholder-shown) ~ label {
  top: 0;
  transform: translateY(-50%) scale(0.8);
  color: #0034de;
  font-weight: bold;
}

`;

export default NoteForm;
