import { DocSectionText } from "@/components/doc/common/docsectiontext";

export const Wireframe = (props) => {
    return (
        <>
            <DocSectionText {...props} />
            <div>
                <img
                    className="w-full"
                    src="https://primefaces.org/cdn/primereact/images/pt/speeddial.jpg"
                    alt="speeddial"
                />
            </div>
        </>
    );
};
