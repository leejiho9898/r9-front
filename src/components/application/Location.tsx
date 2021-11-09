import ScriptLoader from "next/script";
import React, { useEffect } from "react";

const KAKAO_MAP = "d0a88c50dbf74ee622ba0d4d1aafea93"; // env 로 묻음?

const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      {/* 카카오맵 api */}
      <ScriptLoader
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey={KAKAO_MAP}"
      />
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Location;
