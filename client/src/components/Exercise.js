import React from "react";

const Exercise = () =>
  <div>
  <form>
  <label>
    Exercise:
    <input type="text" name="name" />
  </label>
  <label>
 	 Date:
 	 <input type="number" />
	</label>
	<label>
    Weight:
    <input type="number" />
  </label>
  <label>
    Repetitions:
    <input type="number" />
  </label>

  <input type="submit" value="Submit" />
</form>

  </div>


export default Exercise;