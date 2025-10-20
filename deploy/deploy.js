export default async function (hre) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying MockAuction from:", deployer);

  const deployedMockAuction = await deploy("MockAuction", {
    from: deployer,
    log: true,
  });

  console.log("✅ MockAuction contract deployed at:", deployedMockAuction.address);
}

export const tags = ["MockAuction"];
