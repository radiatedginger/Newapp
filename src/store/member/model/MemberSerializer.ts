import MemberModel from "./MemberModel";

export class MemberSerializer {
    static serializeFromBackend(items: any): MemberModel[] {
        if (items.map) {
            return items.map((item: any) => {
                return new MemberModel(
                    item.id,
                    item.mbrId ? item.mbrId : 0,
                    item.fullName ? item.fullName : null,
                    item.grade ? item.grade : null,
                    item.assignedPas ? item.assignedPas : null,
                    item.dafsc ? item.dafsc : null,
                    item.officeSymbol ? item.officeSymbol : null,
                    item.dutyTitle ? item.dutyTitle : null,
                    item.dutyStartDate ? item.dutyStartDate : null,
                    item.dutyPhone ? item.dutyPhone : null,
                    item.supvName ? item.supvName : null,
                    item.supvBeginDate ? item.supvBeginDate : null,
                    item.dateArrivedStation ? item.dateArrivedStation : null,
                    item.rnltd ? item.rnltd : null,
                );
            });
        }
        return [];
    }
}