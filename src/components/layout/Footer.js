import React from "react";
import { useNavigate } from "react-router-dom";

const movie = [
  { name: "Now Playing", link: "now_playing" },
  { name: "Popular", link: "popular" },
  { name: "Top Rated", link: "top_rated" },
  { name: "UpComing", link: "upcoming" },
];

const tv = [
  { name: "TV Airing Today", link: "airing_today" },
  { name: "TV On The Air", link: "on_the_air" },
  { name: "Popular", link: "popular" },
  { name: "Top Rated", link: "top_rated" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-[60px] md-max:py-[50px] rounded-t-lg">
      <div className="w-full mx-auto px-10">
        <div className="footer-container grid gap-x-20 mobile:grid-cols-1 mobile:gap-y-[30px]">
          <div className="footer-column">
            <h1 className="mb-5 text-4xl font-bold no-select">Simple Movie</h1>
            <p className="mb-5 leading-[1.875]">
              <span className="font-medium">Simple Movie</span> is a web which
              has minimalist and easy to use interface for the new member.
            </p>
            <p className="text-[#afb5c0]">
              ©Made by <span className="font-medium">Do Tien Dung</span>
            </p>
            <div className="flex items-center"></div>
          </div>
          <FooterColumn title="Movie" meta={"movie"} col={movie}></FooterColumn>
          <FooterColumn title="TV" meta={"tv"} col={tv}></FooterColumn>
        </div>
      </div>
    </footer>
  );
};

function FooterColumn({ title, col, meta }) {
  const navigate = useNavigate();
  return (
    <div className="footer-column">
      <h3 className="font-bold text-[18px] mb-5 leading-[1.875] no-select">
        {title}
      </h3>
      <ul className="list-none">
        {col.map(({ name, link }) => (
          <li
            key={name}
            className="mb-[10px] hover:text-primary transition-all text-inherit leading-[1.875] cursor-pointer"
            onClick={() => navigate(`/${meta}/${link}`)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
