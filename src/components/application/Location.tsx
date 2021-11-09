import ScriptLoader from "next/script";
import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    if (!container) {
      return;
    }

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );

    const marker = new kakao.maps.Marker({
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
      <div id="map" style={{ width: "500px", height: "400px" }} />
    </div>
  );
};

export default Location;
