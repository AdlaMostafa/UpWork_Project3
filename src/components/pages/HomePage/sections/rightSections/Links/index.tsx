import React, { useState, useEffect } from "react";
import Image from "next/image";
import visit from "../../../../../../../public/assets/SocialMedia/visit.png";
import { Link } from "@mui/material";
import { StyledLinksSection } from "./style";
import axios from "axios";

interface LinkItem {
  id: number;
  name: string;
}

const LinksSection: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/linkData");
        setLinks(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <StyledLinksSection>
      {links.map((item: LinkItem) => (
        <div key={item.id} style={{ display: "flex", alignItems: "center" }}>
          <Link href="#" style={{ color: "black", marginRight: "8px" }}>
            {item.name}
          </Link>
          <Image src={visit} alt="visit" width={16} height={16} />
        </div>
      ))}
    </StyledLinksSection>
  );
};

export default LinksSection;
