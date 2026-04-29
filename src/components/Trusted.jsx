import React from "react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

const Trusted = () => {
  const users = [user1, user2, user3, user4];

  return (
    <div className="flex items-center justify-center gap-3">

      {/* AVATARS */}
      <div className="flex items-center">

        {users.map((img, i) => (
          <div
            key={i}
            style={{
              width: "32px",
              height: "32px",
              minWidth: "32px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #e5e5e5",
              marginLeft: i === 0 ? "0px" : "-8px",
              background: "#fff",
              display: "flex",
            }}
          >
            <img
              src={img}
              alt="user"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}

        {/* 3k+ */}
        <div
          style={{
            width: "32px",
            height: "32px",
            minWidth: "32px",
            borderRadius: "50%",
            border: "1px solid #e5e5e5",
            marginLeft: "-8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f3f3f3",
            fontSize: "10px",
            color: "#666",
            fontWeight: 500,
          }}
        >
          3k+
        </div>

      </div>

      {/* TEXT */}
      <p style={{ fontSize: "12px", color: "#666" }}>
        Trusted by thousands of healthy families
      </p>

    </div>
  );
};

export default Trusted;