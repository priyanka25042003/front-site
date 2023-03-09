import React, { useEffect, useState } from "react";
import "./seat.css";
import image from "../../assert/img_standard.png";

let arr: any[] = [];
function Seate(props: any) {
  function setseta(e: any) {
    if (e.target.checked) {
      arr.push(e.target.id);
    } else {
      let data = arr.filter((item) => item !== e.target.id);
      arr = data;
    }
    // setseates(arr)
    console.log(arr);

    props.sendData(arr);
  }

  return (
    <div>
      <div className="plane">
        <div className="cockpits">
          <img src={image} width={"25%"} alt="" />
        </div>
        <div className="exit exit--front fuselage"></div>
        <form onSubmit={(e) => setseta(e)}>
          <ol className="cabin fuselage">
            <li className="roww roww--1">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="1" />
                  <label htmlFor="1">1</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="2" />
                  <label htmlFor="2">2</label>
                </li>

                <li className="seat">
                  <input
                    onChange={(e) => setseta(e)}
                    type="checkbox"
                    disabled
                    id="3"
                  />
                  <label htmlFor="3">Occupied</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="4" />
                  <label htmlFor="4">4</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="5" />
                  <label htmlFor="5">5</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--2">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="6" />
                  <label htmlFor="6">6</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="7" />
                  <label htmlFor="7">7</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="8" />
                  <label htmlFor="8">8</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="9" />
                  <label htmlFor="9">9</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="10" />
                  <label htmlFor="10">10</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--3">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="11" />
                  <label htmlFor="11">11</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="12" />
                  <label htmlFor="12">12</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="13" />
                  <label htmlFor="13">13</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="14" />
                  <label htmlFor="14">14</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="15" />
                  <label htmlFor="15">15</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--4">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="16" />
                  <label htmlFor="16">16</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="17" />
                  <label htmlFor="17">17</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="18" />
                  <label htmlFor="18">18</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="19" />
                  <label htmlFor="19">19</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="20" />
                  <label htmlFor="20">20</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--5">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="21" />
                  <label htmlFor="21">21</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="22" />
                  <label htmlFor="22">22</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="23" />
                  <label htmlFor="23">23</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="24" />
                  <label htmlFor="24">24</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="25" />
                  <label htmlFor="25">25</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--6">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="26" />
                  <label htmlFor="26">26</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="27" />
                  <label htmlFor="27">27</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="28" />
                  <label htmlFor="28">28</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="29" />
                  <label htmlFor="29">29</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="30" />
                  <label htmlFor="30">30</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--7">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="31" />
                  <label htmlFor="31">31</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="32" />
                  <label htmlFor="32">32</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="33" />
                  <label htmlFor="33">33</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="34" />
                  <label htmlFor="34">34</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="35" />
                  <label htmlFor="35">35</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--8">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="36" />
                  <label htmlFor="36">36</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="37" />
                  <label htmlFor="37">37</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="38" />
                  <label htmlFor="38">38</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="39" />
                  <label htmlFor="39">39</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="40" />
                  <label htmlFor="40">40</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--9">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="41" />
                  <label htmlFor="41">41</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="42" />
                  <label htmlFor="42">42</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="43" />
                  <label htmlFor="43">43</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="44" />
                  <label htmlFor="44">44</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="45" />
                  <label htmlFor="45">45</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--10">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="46" />
                  <label htmlFor="46">46</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="47" />
                  <label htmlFor="47">47</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="48" />
                  <label htmlFor="48">48</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="49" />
                  <label htmlFor="49">49</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="50" />
                  <label htmlFor="50">50</label>
                </li>
              </ol>
            </li>
            <li className="roww roww--10">
              <ol className="seats" type="A">
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="51" />
                  <label htmlFor="51">51</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="52" />
                  <label htmlFor="52">52</label>
                </li>

                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="53" />
                  <label htmlFor="53">53</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="54" />
                  <label htmlFor="54">54</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="55" />
                  <label htmlFor="55">55</label>
                </li>
                <li className="seat">
                  <input onChange={(e) => setseta(e)} type="checkbox" id="56" />
                  <label htmlFor="56">56</label>
                </li>
              </ol>
            </li>
          </ol>
        </form>
      </div>
    </div>
  );
}

export default Seate;
