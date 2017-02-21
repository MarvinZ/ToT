/* Defines the tool entity */
export class ITool {
    toolId: number;
    toolName: string;
   // toolCode: string;
    //description: string;
    linkName:string;

        constructor(id:number, name: string, link:string) {
        this.toolId = id;
        this.toolName = name;
        this.linkName = link;
    }
}
