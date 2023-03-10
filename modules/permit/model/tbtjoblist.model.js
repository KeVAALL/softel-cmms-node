// import { dateIsValid } from "../../../utility/common";

export default (connection, DataTypes) => {
  return connection.define(
    "tbtjoblists",
    {
      tbtJobId: DataTypes.INTEGER,
      tbtJobCode: DataTypes.STRING,
      tbtJobTitle: DataTypes.STRING,
      tbtJobDescription: DataTypes.TEXT,
      tbtJobTypeId: DataTypes.INTEGER,
      tbtJobTypeTitle: DataTypes.STRING,
      tbtJobTypeCode: DataTypes.STRING,
      tbtJobCategoryId: DataTypes.INTEGER,
      tbtJobCategoryCode: DataTypes.STRING,
      tbtJobCategoryTitle: DataTypes.INTEGER,
      tbtJobRelationId: DataTypes.INTEGER,
      fileId: DataTypes.INTEGER,
      fileCode: DataTypes.STRING,
      fileName: DataTypes.STRING,
      fileDescription: DataTypes.TEXT,
      filePath: DataTypes.STRING,
      fileServerId: DataTypes.INTEGER,
      fileServerPath: DataTypes.STRING,
      filePreviewPath: DataTypes.STRING,
      fileTypeId: DataTypes.INTEGER,
      fileTypeName: DataTypes.STRING,
      fileCategoryId: DataTypes.INTEGER,
      fileCategoryName: DataTypes.STRING,
      fileAddedBy: DataTypes.INTEGER,
      fileAddedDate: DataTypes.DATE,
      fileUpdatedBy: DataTypes.INTEGER,
      fileUpdatedDate: DataTypes.DATE,
      fileSize: DataTypes.DOUBLE,
      fileSizeUnits: DataTypes.STRING,
      status: DataTypes.INTEGER,
      fileNameChanged: DataTypes.STRING,
      facilityId: DataTypes.INTEGER,
      facilityTitle: DataTypes.STRING,
      facilityCode: DataTypes.STRING,
      fileTypeExt: DataTypes.STRING,
      fileSizeBytes: DataTypes.STRING,
      fileCategoryCode: DataTypes.STRING,
      tbtRemarks: DataTypes.STRING,
      jsaFileCategoryId: DataTypes.INTEGER,
      jsaFileCategoryName: DataTypes.STRING,
      jsaFileServerId: DataTypes.STRING,
      jsaFileName: DataTypes.STRING,
      jsaFilePath: DataTypes.STRING,
      jsaFileSize: DataTypes.DOUBLE,
      jsaFileNameChanged: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
};
