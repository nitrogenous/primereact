import { DocSectionCode } from "@/components/doc/common/docsectioncode";
import { DocSectionText } from "@/components/doc/common/docsectiontext";

export function ImportDoc(props) {
    const code = {
        basic: `
import { TabMenu } from 'primereact/tabmenu';
        `,
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode
                code={code}
                hideToggleCode
                import
                hideCodeSandbox
                hideStackBlitz
            />
        </>
    );
}
