export default function OpportunitiesForm() {
    return (
      <div className="page-wrapper">
        <div className="form-container">
          <h2>Opportunities For Growth</h2>
          <form>
            <div className="form-group">
              <label>Full Name*</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter" required />
              </div>
  
              <div className="form-group">
                <label>Ph Number*</label>
                <div className="phone-row">
                  <select>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+91" selected>+91</option>
                    <option value="+92">+92</option>
                    <option value="+971">+971</option>
                    <option value="+880">+880</option>
                    <option value="+86">+86</option>
                    <option value="+81">+81</option>
                    <option value="+49">+49</option>
                    <option value="+33">+33</option>
                    <option value="+55">+55</option>
                    <option value="+7">+7</option>
                    <option value="+27">+27</option>
                  </select>
                  <input type="tel" placeholder="Mobile number" required />
                </div>
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Enter Country" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="Enter City" />
              </div>
            </div>
  
            <div className="form-group">
              <label>Preferred Role</label>
              <select>
                <option>Select</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
              </select>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>Current Salary</label>
                <input type="text" placeholder="Enter" />
              </div>
              <div className="form-group">
                <label>Expected Salary</label>
                <input type="text" placeholder="Enter" />
              </div>
            </div>
  
            <div className="form-row">
              <div className="form-group">
                <label>LinkedIn Profile</label>
                <input type="url" placeholder="Enter" />
              </div>
              <div className="form-group">
                <label>Resume</label>
                <input type="file" />
              </div>
            </div>
  
            <div className="form-group">
              <label>
                Please mention your top skills and the areas you’re best at.
              </label>
              <textarea rows="4" placeholder="Select"></textarea>
            </div>
  
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
  