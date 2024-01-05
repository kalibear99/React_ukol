import "./fourth_page.css"

export default function Form() {
    return (
    <div id="form">
      <div className="titleForm">
        <h1>Kontaktovat</h1>
      </div>
      <form className="my-form">
        <div className="name-section">
          <div className="name-input">
            <label>Jméno:</label>
            <input
              type="text"
              id="jmeno"
              name="jmeno"
              required
            />
          </div>
          <div className="name-input">
            <label>Příjmení:</label>
            <input
              type="text"
              id="prijmeni"
              name="prijmeni"
              required
            />
          </div>
        </div>
        
        <div className="email-section">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="zprava-section">
          <label>Zpráva:</label>
          <textarea
            id="zprava"
            name="zprava"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Odeslat</button>
    </form>
    </div>
    );
}