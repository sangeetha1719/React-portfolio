
import React from "react";
import "../scss/styles.scss";

const Contacts = () => {
  return (
    <>
      <br />
      <section className="Contacts p-4 m-3 text-primary-emphasis border border-primary-subtle rounded-2">
        <h2 className="intro text-center mb-4">Contact Me</h2>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
            
              <form className="bg-light p-4 rounded shadow-sm">

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Valid Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <div className="d-grid" id="liveAlertPlaceholder">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
