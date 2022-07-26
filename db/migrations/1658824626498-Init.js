module.exports = class Init1658824626498 {
  name = 'Init1658824626498'

  async up(db) {
    await db.query(`CREATE TABLE "erc1155_owner" ("id" character varying NOT NULL, CONSTRAINT "PK_1edcc74b7820dd0d897b9d92171" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "erc1155_token_owner" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "owner_id" character varying NOT NULL, "token_id" character varying NOT NULL, CONSTRAINT "PK_f8b449f74ab74862ce3d754a0c9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_5e575ce6bb8e85e004d08700ac" ON "erc1155_token_owner" ("owner_id") `)
    await db.query(`CREATE INDEX "IDX_6a264e86b7d384fe923651a860" ON "erc1155_token_owner" ("token_id") `)
    await db.query(`CREATE TABLE "metadata" ("id" character varying NOT NULL, "name" text, "description" text, "image" text, "attributes" jsonb, "animation_url" text, "type" text, CONSTRAINT "PK_56b22355e89941b9792c04ab176" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "erc1155_transfer" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "block" numeric NOT NULL, "transaction_hash" text NOT NULL, "token_id" character varying NOT NULL, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_0674a25d29eb0aa7f281b272203" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_73c0abeaec03ddf4d11b840721" ON "erc1155_transfer" ("token_id") `)
    await db.query(`CREATE INDEX "IDX_0d2e8f94d7d57de35fbefa0c1c" ON "erc1155_transfer" ("from_id") `)
    await db.query(`CREATE INDEX "IDX_889c304916fe3fec132ecec073" ON "erc1155_transfer" ("to_id") `)
    await db.query(`CREATE TABLE "erc1155_contract" ("id" character varying NOT NULL, "name" text, "symbol" text, CONSTRAINT "PK_714a9ea4826d73898b5c2251116" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "erc1155_token" ("id" character varying NOT NULL, "total_supply" numeric, "numeric_id" numeric NOT NULL, "uri" text, "meta_id" character varying, "contract_id" character varying, CONSTRAINT "PK_63124737654b07d068bf54cfcfe" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_8fa24bdfcefd9405194d8b976b" ON "erc1155_token" ("meta_id") `)
    await db.query(`CREATE INDEX "IDX_2b7ca9f92b256b0bf702d11e50" ON "erc1155_token" ("contract_id") `)
    await db.query(`CREATE TABLE "erc721_owner" ("id" character varying NOT NULL, "balance" numeric, CONSTRAINT "PK_dbaf6e78c699f2449b9d0bf1520" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "erc721_transfer" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "block" numeric NOT NULL, "transaction_hash" text NOT NULL, "token_id" character varying NOT NULL, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_972b8de69f0dc0e83d55d39c2f5" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_a127f62ad75779f26b776c4945" ON "erc721_transfer" ("token_id") `)
    await db.query(`CREATE INDEX "IDX_15e3b36d18f898ba157af7b98e" ON "erc721_transfer" ("from_id") `)
    await db.query(`CREATE INDEX "IDX_dc17e48f343dfda008975c6393" ON "erc721_transfer" ("to_id") `)
    await db.query(`CREATE TABLE "erc721_contract" ("id" character varying NOT NULL, "name" text, "symbol" text, "total_supply" numeric, "contract_uri" text, "contract_uri_updated" numeric, "address" text, "decimals" integer, CONSTRAINT "PK_5ac5a33bb1d74ded4bc74a3661c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "erc721_token" ("id" character varying NOT NULL, "numeric_id" numeric NOT NULL, "uri" text, "owner_id" character varying, "meta_id" character varying, "contract_id" character varying, CONSTRAINT "PK_d621a67a63a7afeeac11533cd2e" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_2b5437007e048eccbeb8222235" ON "erc721_token" ("owner_id") `)
    await db.query(`CREATE INDEX "IDX_5b6628650ad2a6bf2d7031a62e" ON "erc721_token" ("meta_id") `)
    await db.query(`CREATE INDEX "IDX_7e22f37f2ee0280f3bf548ad98" ON "erc721_token" ("contract_id") `)
    await db.query(`ALTER TABLE "erc1155_token_owner" ADD CONSTRAINT "FK_5e575ce6bb8e85e004d08700ac8" FOREIGN KEY ("owner_id") REFERENCES "erc1155_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_token_owner" ADD CONSTRAINT "FK_6a264e86b7d384fe923651a860a" FOREIGN KEY ("token_id") REFERENCES "erc1155_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_transfer" ADD CONSTRAINT "FK_73c0abeaec03ddf4d11b840721a" FOREIGN KEY ("token_id") REFERENCES "erc1155_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_transfer" ADD CONSTRAINT "FK_0d2e8f94d7d57de35fbefa0c1c7" FOREIGN KEY ("from_id") REFERENCES "erc1155_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_transfer" ADD CONSTRAINT "FK_889c304916fe3fec132ecec0731" FOREIGN KEY ("to_id") REFERENCES "erc1155_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_token" ADD CONSTRAINT "FK_8fa24bdfcefd9405194d8b976b9" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc1155_token" ADD CONSTRAINT "FK_2b7ca9f92b256b0bf702d11e50a" FOREIGN KEY ("contract_id") REFERENCES "erc1155_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_transfer" ADD CONSTRAINT "FK_a127f62ad75779f26b776c4945b" FOREIGN KEY ("token_id") REFERENCES "erc721_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_transfer" ADD CONSTRAINT "FK_15e3b36d18f898ba157af7b98ee" FOREIGN KEY ("from_id") REFERENCES "erc721_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_transfer" ADD CONSTRAINT "FK_dc17e48f343dfda008975c63935" FOREIGN KEY ("to_id") REFERENCES "erc721_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_token" ADD CONSTRAINT "FK_2b5437007e048eccbeb82222357" FOREIGN KEY ("owner_id") REFERENCES "erc721_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_token" ADD CONSTRAINT "FK_5b6628650ad2a6bf2d7031a62ee" FOREIGN KEY ("meta_id") REFERENCES "metadata"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "erc721_token" ADD CONSTRAINT "FK_7e22f37f2ee0280f3bf548ad981" FOREIGN KEY ("contract_id") REFERENCES "erc721_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "erc1155_owner"`)
    await db.query(`DROP TABLE "erc1155_token_owner"`)
    await db.query(`DROP INDEX "public"."IDX_5e575ce6bb8e85e004d08700ac"`)
    await db.query(`DROP INDEX "public"."IDX_6a264e86b7d384fe923651a860"`)
    await db.query(`DROP TABLE "metadata"`)
    await db.query(`DROP TABLE "erc1155_transfer"`)
    await db.query(`DROP INDEX "public"."IDX_73c0abeaec03ddf4d11b840721"`)
    await db.query(`DROP INDEX "public"."IDX_0d2e8f94d7d57de35fbefa0c1c"`)
    await db.query(`DROP INDEX "public"."IDX_889c304916fe3fec132ecec073"`)
    await db.query(`DROP TABLE "erc1155_contract"`)
    await db.query(`DROP TABLE "erc1155_token"`)
    await db.query(`DROP INDEX "public"."IDX_8fa24bdfcefd9405194d8b976b"`)
    await db.query(`DROP INDEX "public"."IDX_2b7ca9f92b256b0bf702d11e50"`)
    await db.query(`DROP TABLE "erc721_owner"`)
    await db.query(`DROP TABLE "erc721_transfer"`)
    await db.query(`DROP INDEX "public"."IDX_a127f62ad75779f26b776c4945"`)
    await db.query(`DROP INDEX "public"."IDX_15e3b36d18f898ba157af7b98e"`)
    await db.query(`DROP INDEX "public"."IDX_dc17e48f343dfda008975c6393"`)
    await db.query(`DROP TABLE "erc721_contract"`)
    await db.query(`DROP TABLE "erc721_token"`)
    await db.query(`DROP INDEX "public"."IDX_2b5437007e048eccbeb8222235"`)
    await db.query(`DROP INDEX "public"."IDX_5b6628650ad2a6bf2d7031a62e"`)
    await db.query(`DROP INDEX "public"."IDX_7e22f37f2ee0280f3bf548ad98"`)
    await db.query(`ALTER TABLE "erc1155_token_owner" DROP CONSTRAINT "FK_5e575ce6bb8e85e004d08700ac8"`)
    await db.query(`ALTER TABLE "erc1155_token_owner" DROP CONSTRAINT "FK_6a264e86b7d384fe923651a860a"`)
    await db.query(`ALTER TABLE "erc1155_transfer" DROP CONSTRAINT "FK_73c0abeaec03ddf4d11b840721a"`)
    await db.query(`ALTER TABLE "erc1155_transfer" DROP CONSTRAINT "FK_0d2e8f94d7d57de35fbefa0c1c7"`)
    await db.query(`ALTER TABLE "erc1155_transfer" DROP CONSTRAINT "FK_889c304916fe3fec132ecec0731"`)
    await db.query(`ALTER TABLE "erc1155_token" DROP CONSTRAINT "FK_8fa24bdfcefd9405194d8b976b9"`)
    await db.query(`ALTER TABLE "erc1155_token" DROP CONSTRAINT "FK_2b7ca9f92b256b0bf702d11e50a"`)
    await db.query(`ALTER TABLE "erc721_transfer" DROP CONSTRAINT "FK_a127f62ad75779f26b776c4945b"`)
    await db.query(`ALTER TABLE "erc721_transfer" DROP CONSTRAINT "FK_15e3b36d18f898ba157af7b98ee"`)
    await db.query(`ALTER TABLE "erc721_transfer" DROP CONSTRAINT "FK_dc17e48f343dfda008975c63935"`)
    await db.query(`ALTER TABLE "erc721_token" DROP CONSTRAINT "FK_2b5437007e048eccbeb82222357"`)
    await db.query(`ALTER TABLE "erc721_token" DROP CONSTRAINT "FK_5b6628650ad2a6bf2d7031a62ee"`)
    await db.query(`ALTER TABLE "erc721_token" DROP CONSTRAINT "FK_7e22f37f2ee0280f3bf548ad981"`)
  }
}