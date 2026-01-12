import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="flex gap-2">
			<button
				onClick={() => changeLanguage("hu")}
				className={`px-3 py-1 rounded transition-colors ${i18n.language === "hu" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
			>
				HU
			</button>
			<button
				onClick={() => changeLanguage("en")}
				className={`px-3 py-1 rounded transition-colors ${i18n.language === "en" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
			>
				EN
			</button>
		</div>
	);
}

export default LanguageSwitcher;
