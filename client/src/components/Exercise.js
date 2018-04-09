import React from "react";

const Exercise = () =>
  <div>
  <form>
  <label>
    Exercise:
    <input type="text" placeholder="ex. bench-press" className="form-control" id="exercise"  />
  </label>
  <label>
 	 Date:
 	 <input type="text" id="date" className="form-control"  />
	</label>
	<label>
    Weight:
    <input type="number" id="weight" className="form-control" />
  </label>
  <label>
    Repetitions:
    <input type="number" id="repetitions" className="form-control" />
  </label>

  <button type="submit" className="btn btn-primary">Save Workout</button>
  
</form>

  </div>


export default Exercise;