import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class CreateOrderDto {
    @IsNotEmpty()
    @IsMongoId()
    readonly product:string;

    @IsNumber()
    @Min(1)
    readonly quantity:number = 1;
}
